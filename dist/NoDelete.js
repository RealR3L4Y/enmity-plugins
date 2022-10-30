function Y(e){window.enmity.plugins.registerPlugin(e)}const $={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function R(...e){return window.enmity.modules.bulk(...e)}function P(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function j(e){return window.enmity.patcher.create(e)}var z="NoDelete",W="1.3.9",X="patch-1.0.2",q='Basic "Message Logger"',J=[{name:"Marek (modified by spin)",id:"308440976723148800"}],K="#ff0069",Q="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/NoDelete.js",l={name:z,version:W,build:X,description:q,authors:J,color:K,sourceUrl:Q};const w=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const U=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const T=window.enmity.modules.common.Storage,y=window.enmity.modules.common.Toasts,D=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const B=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const Z=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const V=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function ee(e,t,i){return window.enmity.settings.getBoolean(e,t,i)}const k=e=>{let t=0;for(let i in e)t++;return t},te=e=>{let t=e.split(`
`).map(i=>{if(i!="")return`"${i.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[k(t)]=`${t[k(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function ne(){try{let e=await T.getItem("device_list");if(e)return JSON.parse(e);let t=(await B.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,i=te(t);await T.setItem("device_list",i);let r=await T.getItem("device_list");return JSON.parse(r)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function oe(e,t){let i=await ne();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Software Version:** ${U.DCDDeviceManager.systemVersion}
> **Device:** ${i[U.DCDDeviceManager.device]}`}function d(e){return window.enmity.assets.getIDByName(e)}const u={Debug:d("debug"),Retry:d("ic_message_retry"),Failed:d("Small"),Cancel:d("ic_megaphone_nsfw_16px"),Delete:d("ic_message_delete"),Copy:d("toast_copy_link"),Open:d("ic_leave_stage"),Clipboard:d("pending-alert"),Debug_Command:{Sent:d("ic_application_command_24px"),Clock:d("clock")},Settings:{Toasts:{Context:d("toast_image_saved"),Settings:d("ic_selection_checked_24px")},Invite:d("invite"),Debug:d("ic_rulebook_16px")}},L=e=>{y.open({content:`Copied ${e} to clipboard.`,source:u.Clipboard})},{native:v}=window.enmity;function ie(){v.reload()}v.version,v.build,v.device,v.version;async function ae({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,i=await(await B.get(t)).text;let r=i.match(/\d\.\d\.\d+/g),a=i.match(/patch\-\d\.\d\.\d+/g);return!r||!a?G(e.name,e.version):(r=r[0],a=a[0],r!=e.version?O(t,r,a.split("-")[1],e,!1):a!=e.build?O(t,r,a.split("-")[1],e,!0):G(e.name,e.version))}const O=(e,t,i,r,a)=>{const c=a?i:t;D.show({title:"Update found",body:`A newer ${a?"build":"version"} is available for ${r.name}. ${a?`
The version will remain at ${t}, but the build will update to ${i}.`:""}
Would you like to install ${a?`build \`${i}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>se(e,c,r,a)})},G=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),y.open({content:`${e} is on latest version (${t})`,source:u.Settings.Toasts.Settings})};async function se(e,t,i,r){window.enmity.plugins.installPlugin(e,({data:a})=>{a=="installed_plugin"||a=="overridden_plugin"?D.show({title:`Updated ${i.name}`,body:`Successfully updated to ${r?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{ie()}}):D.show({title:"Error",body:`Something went wrong while updating ${i.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{Router.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${i.name}%20Update%20Error%3A%20${r?`b${version}`:`v${version}`}`)},onCancel:()=>{D.close()}})})}const{components:o}=window.enmity;o.Alert;const re=o.Button;o.FlatList;const le=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const me=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const f=o.Text;o.TextInput,o.TouchableHighlight;const E=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const h=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const I=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const m=o.FormRow,M=o.FormSection;o.FormSelect,o.FormSubLabel;const ce=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const C=window.enmity.modules.common.Components.General.Animated,[x,de]=R($.byProps("transitionToGuild"),$.byProps("setString"));var ue=({manifest:e})=>{const t=V.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:w.ThemeColorMap.HEADER_PRIMARY,fontFamily:w.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:w.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),i=n.useRef(new C.Value(1)).current,r=()=>{C.spring(i,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},a=()=>{C.spring(i,{toValue:1,duration:250,useNativeDriver:!0}).start()},c=()=>{x.openURL("https://spin.rip/")},b={transform:[{scale:i}]};return n.createElement(n.Fragment,null,n.createElement(h,{style:t.container},n.createElement(E,{onPress:c,onPressIn:r,onPressOut:a},n.createElement(C.View,{style:[b]},n.createElement(le,{style:[t.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(h,{style:t.text_container},n.createElement(E,{onPress:()=>{x.openURL(e.sourceUrl)}},n.createElement(f,{style:[t.main_text,t.header]},e.name," ")),n.createElement(h,{style:{flexDirection:"row"}},n.createElement(f,{style:[t.main_text,t.sub_header]},"A plugin by"),n.createElement(E,{onPress:()=>{x.openURL("https://spin.rip/")}},n.createElement(f,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(h,{style:{flexDirection:"row"}},n.createElement(f,{style:[t.main_text,t.sub_header]},"Settings page by"),n.createElement(E,{onPress:()=>{x.openURL("https://github.com/acquitelol/")}},n.createElement(f,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},"Acquite <3"))),n.createElement(h,null,n.createElement(E,{style:{flexDirection:"row"},onPress:()=>{de.setString(`**${e.name}** v${e.version}`),L("plugin name and version")}},n.createElement(f,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(f,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[ge,H]=R($.byProps("transitionToGuild"),$.byProps("setString"));var pe=({manifest:e,settings:t,hasToasts:i,section:r,commands:a})=>{const c=V.createThemedStyleSheet({icon:{color:w.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:w.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[b,F]=n.useState(),[S,p]=n.useState();return n.createElement(n.Fragment,null,n.createElement(me,{onTouchStart:s=>{F(s.nativeEvent.pageX),p(s.nativeEvent.pageY)},onTouchEnd:s=>{b-s.nativeEvent.pageX<-100&&S-s.nativeEvent.pageY<40&&S-s.nativeEvent.pageY>-40&&Z.pop()}},n.createElement(ue,{manifest:e}),r,a&&n.createElement(M,{title:"Plugin Commands"},n.createElement(h,{style:c.text_container},a.map(s=>n.createElement(re,{style:c.command,key:s,onPress:function(){H.setString(`/${s}`),L(`the command ${s}`)},title:`/${s}`},"/",s)))),n.createElement(M,{title:"Utility"},i&&n.createElement(n.Fragment,null,n.createElement(m,{label:"Initialization Toasts",leading:n.createElement(m.Icon,{style:c.icon,source:u.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(ce,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),y.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:u.Settings.Toasts.Settings})}})}),n.createElement(I,null)),n.createElement(m,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(m.Icon,{style:c.icon,source:u.Settings.Debug}),trailing:m.Arrow,onPress:async function(){H.setString(await oe(e.name,e.version)),L("plugin debug information")}}),n.createElement(I,null),n.createElement(m,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(m.Icon,{style:c.icon,source:u.Delete}),trailing:m.Arrow,onPress:async function(){await T.removeItem("device_list"),y.open({content:"Cleared device list storage.",source:u.Settings.Toasts.Settings})}})),n.createElement(M,{title:"Source"},n.createElement(m,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(m.Icon,{style:c.icon,source:u.Copy}),trailing:m.Arrow,onPress:()=>{ae({manifest:e})}}),n.createElement(I,null),n.createElement(m,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(m.Icon,{style:c.icon,source:u.Open}),trailing:m.Arrow,onPress:()=>{ge.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(m,{label:`Plugin Version: ${e.version}`})))};const N=j("NoDelete"),we={...l,patches:[],onStart(){let e=0,t=3;const i=()=>{let r=ee(l.name,`${l.name}-toastEnable`,!1);try{e++;const a=P("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue"),c=P("getMessage","getMessages"),b=P("getChannel","getDMFromUserId");console.log(`${l.name} delayed start attempt ${e}/${t}.`),r&&y.open({content:`[${l.name}] start attempt ${e}/${t}.`,source:u.Debug});for(const p of["MESSAGE_UPDATE","MESSAGE_DELETE"])try{a.dispatch({type:p,message:{}})}catch(s){console.log(`[${l.name} Dispatch Error]`,s)}const F=a._actionHandlers._orderedActionHandlers.MESSAGE_DELETE.find(p=>p.name==="MessageStore"),S=a._actionHandlers._orderedActionHandlers.MESSAGE_UPDATE.find(p=>p.name==="MessageStore");N.before(F,"actionHandler",(p,s)=>{const g=c.getMessage(s[0].channelId,s[0].id);if(s[0]={},!(g!=null&&g.editedTimestamp)||(g==null?void 0:g.editedTimestamp._isValid)){const _={type:"MESSAGE_UPDATE",message:{...g,edited_timestamp:"invalid_timestamp",content:g.content+" `[deleted]`",guild_id:b.getChannel(g.channel_id).guild_id},log_edit:!1};a.dispatch(_)}}),N.before(S,"actionHandler",(p,s)=>{var g,_;try{if(s[0].log_edit==!1)return;const A=c.getMessage(s[0].message.channel_id,s[0].message.id);if(!((_=(g=s[0])==null?void 0:g.message)!=null&&_.content))return;try{if(!s[0].edited_timestamp._isValid)return}catch{}s[0].message.content=A.content+" `[edited]`\n"+s[0].message.content;return}catch(A){console.log(`[${l.name} Error]`,A)}}),console.log(`${l.name} delayed start successful.`),r&&y.open({content:`[${l.name}] start successful.`,source:u.Settings.Toasts.Settings})}catch(a){console.log(`[${l.name} Plugin Error]`,a),e<t?(console.warn(`${l.name} failed to start. Trying again in ${e}0s.`),r&&y.open({content:`[${l.name}] failed to start trying again in ${e}0s.`,source:u.Failed}),setTimeout(i,e*1e4)):(console.error(`${l.name} failed to start. Giving up.`),y.open({content:`${l.name} failed to start. Giving up.`,source:u.Failed}))}};setTimeout(()=>{i()},300)},onStop(){N.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(pe,{manifest:l,settings:e,hasToasts:!1,section:null,commands:null})}};Y(we);
