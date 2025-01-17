import { FormSection, FormRow, FormSwitch } from "enmity/components";
import { Plugin, registerPlugin } from "enmity/managers/plugins";
import { SettingsStore, get, set } from "enmity/api/settings";
import { create } from "enmity/patcher";
import manifest from "../manifest.json";
import { React, Messages, Toasts } from "enmity/metro/common";
import { Icons, check_if_compatible_device } from "../../common/components/_pluginSettings/utils";
import SettingsPage from "../../common/components/_pluginSettings/settingsPage";

interface SettingsProps {
    settings: SettingsStore;
}

const Patcher = create("BTE");

// the basic structure of some of this code was taken from https://github.com/jqms/enmity-plugins/blob/fb2b6d60a5054128c4b2e44ab3358d524e0c2154/ChangeDiscordLink/src/index.tsx#L13-L30 -- thank you :)
const BTE: Plugin = {
    ...manifest,
    onStart() {
        async function checkCompat() {
            await check_if_compatible_device(manifest);
        }
        try {
            if (!get("_twitter", "_type", false)) set("_twitter", "_type", "fxtwitter");

            Patcher.before(Messages, "sendMessage", (self, args, orig) => {
                const content = args[1]["content"];
                const twitterLinks = content.match(/http(s)?:\/\/twitter.com\/\w{4,15}\/status\/\d+/gim);
                if (!twitterLinks) return;
                args[1]["content"] = content.replace(/http(s)?:\/\/twitter.com/gim, `https://${get("_twitter", "_type", false)}.com`);
            });
        } catch (err) {
            console.log("[ BetterTwitterEmbeds Error ]", err);
        }

        checkCompat();
    },
    onStop() {
        Patcher.unpatchAll();
    },
    patches: [],
    getSettingsPanel({ settings }: SettingsProps) {
        return <SettingsPage manifest={manifest} settings={settings} hasToasts={false} section={
            <FormSection title="Plugin Settings">
                <FormRow
                    label="Use vxtwitter.com instead of fxtwitter.com"
                    leading={<FormRow.Icon source={Icons.Copy} />}
                    trailing={
                        <FormSwitch
                            value={settings.getBoolean("_vxtwitter", false)}
                            onValueChange={() => {
                                try {
                                    settings.toggle("_vxtwitter", false);
                                    if (settings.getBoolean("_vxtwitter", false)) {
                                        set("_twitter", "_type", "vxtwitter");
                                    } else {
                                        set("_twitter", "_type", "fxtwitter");
                                    }
                                    Toasts.open({
                                        content: `Switched to ${get("_twitter", "_type", false)}.`,
                                        source: Icons.Settings.Toasts.Settings,
                                    });
                                } catch (err) {
                                    console.log("[ BetterTwitterEmbeds Error ]", err);

                                    Toasts.open({
                                        content: "An error has occurred. Check debug logs for more info.",
                                        source: Icons.Failed,
                                    });
                                }
                            }}
                        />
                    }
                />
            </FormSection>
        } commands={null}
        />;
    },
};

registerPlugin(BTE);
