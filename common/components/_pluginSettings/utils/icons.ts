import { getIDByName } from 'enmity/api/assets';

export const Icons = {
    Debug: getIDByName('debug'),
    Retry: getIDByName('ic_message_retry'),
    Failed: getIDByName('Small'),
    Cancel: getIDByName('ic_megaphone_nsfw_16px'),
    Add: getIDByName('add_white'),
    Delete: getIDByName('ic_message_delete'),
    Clear: getIDByName('ic_clear_all_24px'),
    Pencil: getIDByName('ic_pencil_24px'),

    Copy: getIDByName('toast_copy_link'),
    Open: getIDByName('ic_leave_stage'),
    Clipboard: getIDByName('pending-alert'),

    Debug_Command: {
        Sent: getIDByName('ic_application_command_24px'),
        Clock: getIDByName('clock')
    },

    Settings: {
        Toasts: {
            Context: getIDByName('toast_image_saved'),
            Settings: getIDByName('ic_selection_checked_24px')
        },
        Self: getIDByName('friends_toast_icon'),
        Share: getIDByName('share'),
        Commands: getIDByName('ic_profile_badge_bot_commands'),
        Debug: getIDByName('ic_rulebook_16px'),
    }
};