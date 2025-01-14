/* i've suffered immense brain damage */

// main imports of elements and dependencies
import { FormRow, FormDivider, ScrollView, Image, View, TouchableOpacity, Text } from "enmity/components";
import { React, StyleSheet, Constants, Dialog, Navigation, Profiles, Toasts } from "enmity/metro/common";
import { getByName, filters, bulk } from "enmity/metro"
import { Storage } from "enmity/metro/common"
import { getBoolean, get } from "enmity/api/settings";
import { clipboard_toast, Icons } from "../../common/components/_pluginSettings/utils";

const [
    Clipboard, // used to copy the dl link to keyboard
    GetProfile // used to get the user's profile
] = bulk(
    filters.byProps("setString"),
    filters.byProps("fetchProfile")
);

// main search module and arrow
const Search = getByName("StaticSearchBarContainer");

export default () => {
    const styles = StyleSheet.createThemedStyleSheet({
        main_text: {
            opacity: 0.975,
            letterSpacing: 0.25,
        },
        item_container: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 4,
            paddingBottom: 4,
            width: "100%",
        },
        author_name: {
            color: Constants.ThemeColorMap.HEADER_PRIMARY,
            fontFamily: Constants.Fonts.DISPLAY_BOLD,
            fontSize: 18,
            letterSpacing: 0.25,
            paddingBottom: 4,
        },
        log_header: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "95%",
        },
        log_sub_header: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            maxWidth: "50%",
        },
        log_time: {
            color: Constants.ThemeColorMap.TEXT_MUTED,
            opacity: 0.990,
            fontSize: 13,
            paddingLeft: 4,
        },
        log_type: {
            color: Constants.ThemeColorMap.TEXT_MUTED,
            opacity: 0.450,
            fontSize: 16,
            marginLeft: "auto",
        },
        avatar_container: {
            alignSelf: "start",
            justifySelf: "start",
        },
        author_avatar: {
            width: 40,
            height: 40,
            borderRadius: 100,
        },
        old_message: {
            color: Constants.ThemeColorMap.TEXT_MUTED,
            opacity: 0.890,
            fontSize: 16,
        },
        message_content: {
            color: Constants.ThemeColorMap.TEXT_NORMAL,
            opacity: 0.985,
            fontSize: 16,
        },
        main_container: {
            paddingLeft: 8,
            paddingRight: 4,
            paddingTop: 2,
            paddingBottom: 16,
            width: "95%",
        },
        text_container: {
            display: "flex",
            flexDirection: "column",
            paddingBottom: 4,
            paddingLeft: 8,
            width: "95%",
        },
    });

    // shorten string
    const shortenStr = (str: string, maxLen: number) => {
        if (str.length > maxLen) {
            return str.substring(0, maxLen) + '...';
        }
        return str;
    }

    // clears message logs
    const clearLogs = () => {
        Storage.setItem("NoDeleteLogs", "[]")
        Storage.getItem("NoDeleteLogs").then((res: any) => {
            if (res == "[]") {
                Dialog.show({
                    title: "Logs Cleared",
                    body: "NoDelete message logs have been cleared",
                    confirmText: "Close logs",
                    cancelText: "Cancel",

                    onConfirm: () => Navigation.pop(),
                });
            } else {
                Dialog.show({
                    title: "Error clearing logs",
                    body: "NoDelete logs could not be cleared. Try again or report this issues to spin.",
                    confirmText: "Close logs",
                    cancelText: "Cancel",

                    onConfirm: () => Navigation.pop(),
                });
            }
        })
    }

    // max log count
    const maxLogCount = get("_nodelete", "maxLogs", "1000") as string;

    // message logs and keyword search state
    const [logs, setLogs] = React.useState([])
    const [query, setQuery] = React.useState([])

    // only sets it once
    React.useEffect(() => {
        Storage.getItem("NoDeleteLogs").then((res: string) => {
            let messageLogs: object[] = JSON.parse(res)
            setLogs(messageLogs.reverse())
        })
    }, [])

    if (logs.length > parseInt(maxLogCount)) {
        if (getBoolean("_nodelete", "autoClear", false) == false) {
            Dialog.show({
                title: `Logs have exceeded ${shortenStr(maxLogCount, 12)}`,
                body: `NoDelete logs have exceeded your limit of ${shortenStr(maxLogCount, 12)}${parseInt(maxLogCount) > 1000 ? "\nYou may experience performance issues or a laggy log page UI. Clear your logs to fix this issue." : ""}`,
                confirmText: "Clear logs",
                cancelText: "Close",

                onConfirm: () => clearLogs(),
            });
        } else {
            clearLogs();

            Storage.getItem("NoDeleteLogs").then((res: string) => {
                if (res === "[]") {
                    Toasts.open({
                        content: `Auto-cleared ${shortenStr(logs.length, 10)} logs.`,
                        source: Icons.Settings.Toasts.Settings,
                    });
                } else {
                    Toasts.open({
                        content: "NoDelete logs could not be cleared. Try again or report this issues to spin.",
                        source: Icons.Failed,
                    });
                }
            })
        }
    }

    return <>
        <Search
            placeholder="Search Logs"
            onChangeText={(text: string) => setQuery(text)}
        />
        <FormRow
            label="Clear all NoDelete message logs"
            trailing={FormRow.Arrow}
            onPress={
                (): void => clearLogs()
            }
        />
        <FormDivider />
        <ScrollView>
            <View style={styles.main_container}>
                {logs.filter((item: object) => JSON.stringify(item).includes(query)).map((item: object) =>
                    <>
                        <View style={styles.item_container}>
                            <TouchableOpacity onPress={() => {
                                GetProfile.fetchProfile(item["id"]).then(() => {
                                    Profiles.showUserProfile({ userId: item["id"] });
                                }).catch((err: any) => {
                                    Toasts.open({
                                        content: "Error while fetching user. Check logs for more info.",
                                        source: Icons.Failed,
                                    })
                                    console.log("[NoDelete User Fetch Error]", err)
                                })
                            }} style={styles.avatar_container}>
                                <Image
                                    style={styles.author_avatar}
                                    source={{
                                        uri: item["avatar"],
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Clipboard.setString(`${item["author"]} (\`${item["id"]}\`):\n>>> ${item["content"].join("\n")}`); clipboard_toast("log content") }} style={styles.text_container}>
                                <View style={styles.log_header}>
                                    <View style={styles.log_sub_header}>
                                        <Text style={[styles.main_text, styles.author_name]}>
                                            {item["author"]}
                                        </Text>
                                        <Text style={[styles.main_text, styles.log_time]}>
                                            {item["content"][0]}
                                        </Text>
                                    </View>
                                    <Text style={[styles.main_text, styles.log_type]}>
                                        {(item["type"] === "edit" ? <FormRow.Icon source={Icons.Pencil} /> : <FormRow.Icon source={Icons.Delete} />)}
                                    </Text>
                                </View>
                                <View>
                                    {item["content"].length == 3 ? (
                                        <>
                                            <Text style={styles.old_message}>
                                                {item["content"][1]}
                                            </Text>
                                            <Text style={styles.message_content}>
                                                {item["content"][2]}
                                            </Text>
                                        </>
                                    ) : (
                                        <Text style={styles.message_content}>
                                            {item["content"][1]}
                                        </Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                        </View>
                        <FormDivider />
                    </>
                )}
            </View>
        </ScrollView>
    </>;
};