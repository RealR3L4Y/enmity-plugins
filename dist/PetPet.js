function O(e){window.enmity.plugins.registerPlugin(e)}var ee="PetPet",te="1.0.6",ne="patch-1.0.12",oe="Generate a petpet gif from a given image",ie=[{name:"spin",id:"308440976723148800"}],ae="#ff0069",se="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/PetPet.js",N={name:ee,version:te,build:ne,description:oe,authors:ie,color:ae,sourceUrl:se},G;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(G||(G={}));var C;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(C||(C={}));var U;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(U||(U={}));var z;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(z||(z={}));var f;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(f||(f={}));var Y;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(Y||(Y={}));const x={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function q(...e){return window.enmity.modules.bulk(...e)}function j(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function P(e,t,i,a){window.enmity.clyde.sendReply(e,t,i,a)}const y=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const p=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const _=window.enmity.modules.common.Storage,F=window.enmity.modules.common.Toasts,I=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const M=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const re=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const H=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const le={id:"petpet-command",name:"petpet",displayName:"petpet",description:"Generate a petpet gif from a given image",displayDescription:"Generate a petpet gif from a given image",type:C.Chat,inputType:U.BuiltInText,options:[{name:"url",displayName:"url",description:"The URL of the image to petpet",displayDescription:"The URL of the image to petpet",type:f.String,required:!1},{name:"user",displayName:"user",description:"Grab a user's avatar to petpet",displayDescription:"Grab a user's avatar to petpet",type:f.User,required:!1},{name:"size",displayName:"size",description:"Change the size of the petpet gif. Max is 512. Defaults to 100, higher values equal larger files and potentially no Discord embeds",displayDescription:"Change the size of the petpet gif. Max is 512. Defaults to 100, higher values equal larger files and potentially no Discord embeds",type:f.Integer,required:!1},{name:"delay",displayName:"delay",description:"The delay between each frame, defaults to 20",displayDescription:"The delay between each frame, defaults to 20",type:f.Integer,required:!1},{name:"whisper",displayName:"whisper",description:"Only you can see the result",displayDescription:"Only you can see the result",type:f.Boolean,required:!1}],execute:async function(e,t){var i,a,r,u,v;const w=e[e.findIndex(s=>s.name==="url")],h=e[e.findIndex(s=>s.name==="user")],d=e[e.findIndex(s=>s.name==="size")],m=e[e.findIndex(s=>s.name==="delay")],$=e[e.findIndex(s=>s.name==="whisper")],Z="v2";if(!w&&!h)return P((i=t==null?void 0:t.channel.id)!=null?i:"0","No argument provided, nothing will happen. Here's a banana instead \u{1F34C}");try{const s=await M.get(`https://petpet-api.clit.repl.co/petpet?url=${w!=null&&w.value?w.value:j("getUser").getUser(h==null?void 0:h.value).getAvatarURL().split("?")[0].replace(/gif|webp/,"png")}&size=${d?d.value:100}&delay=${m?m.value:20}&version=${Z}`).then(R=>R.body);if(s.status==!0){const R={type:"rich",image:{proxy_url:s==null?void 0:s.result,url:s==null?void 0:s.result,width:d?d.value:100,height:d?d.value:100},footer:{text:`Files are purged every 24 hours \u2022 Powered by ${s==null?void 0:s.github}`},color:"0xff0069"};if((a=$==null?void 0:$.value)==null||a){P((r=t==null?void 0:t.channel.id)!=null?r:"0",{embeds:[R]});return}else return{content:s==null?void 0:s.result}}else console.log("[ PetPet Fetch Response ]",s,s==null?void 0:s.status),console.log("[ PetPet Arguments ]",w,h,d,m,$),P((u=t==null?void 0:t.channel.id)!=null?u:"0","Something went wrong, please try again later. Fetch response and PetPet arguments sent to console.")}catch(s){console.log("[ PetPet Error ]",s),console.log("[ PetPet Arguments ]",w,h,d,m,$),P((v=t==null?void 0:t.channel.id)!=null?v:"0","An error occured while fetching and preparing the petpet image. Check debug logs for more info.")}}},W=[le],{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const ce=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const me=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const b=o.Text;o.TextInput,o.TouchableHighlight;const S=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const D=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const T=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const c=o.FormRow,V=o.FormSection;o.FormSelect,o.FormSubLabel;const ue=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const X=e=>{let t=0;for(let i in e)t++;return t},de=e=>{let t=e.split(`
`).map(i=>{if(i!="")return`"${i.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[X(t)]=`${t[X(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function J(){try{let e=await _.getItem("device_list");if(e)return JSON.parse(e);let t=(await M.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,i=de(t);await _.setItem("device_list",i);let a=await _.getItem("device_list");return JSON.parse(a)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function ge(e,t,i){let a=await J();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${i.split("-")[1]}
> **Discord Build:** ${p.InfoDictionaryManager.Version} (${p.InfoDictionaryManager.Build})
> **Software Version:** ${p.DCDDeviceManager.systemVersion}
> **Device:** ${a[p.DCDDeviceManager.device]}`}function l(e){return window.enmity.assets.getIDByName(e)}const g={Debug:l("debug"),Retry:l("ic_message_retry"),Failed:l("Small"),Cancel:l("ic_megaphone_nsfw_16px"),Add:l("add_white"),Delete:l("ic_message_delete"),Clear:l("ic_clear_all_24px"),Pencil:l("ic_pencil_24px"),Copy:l("toast_copy_link"),Open:l("ic_leave_stage"),Clipboard:l("pending-alert"),Debug_Command:{Sent:l("ic_application_command_24px"),Clock:l("clock")},Settings:{Toasts:{Context:l("toast_image_saved"),Settings:l("ic_selection_checked_24px")},Self:l("friends_toast_icon"),Share:l("share"),Commands:l("ic_profile_badge_bot_commands"),Debug:l("ic_rulebook_16px")}},k=e=>{F.open({content:`Copied ${e} to clipboard.`,source:g.Clipboard})},{native:E}=window.enmity;function we(){E.reload()}E.version,E.build,E.device,E.version;const he=j("transitionToGuild");async function ye({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,i=await(await M.get(t)).text;let a=i.match(/\d\.\d\.\d+/g),r=i.match(/patch\-\d\.\d\.\d+/g);return!a||!r?K(e.name,e.version):(a=a[0],r=r[0],a!=e.version?A(t,a,r.split("-")[1],e,!1):r!=e.build?A(t,a,r.split("-")[1],e,!0):K(e.name,e.version))}const A=(e,t,i,a,r)=>{const u=r?i:t;I.show({title:"Update found",body:`A newer ${r?"build":"version"} is available for ${a.name}. ${r?`
The version will remain at ${t}, but the build will update to ${i}.`:""}
Would you like to install ${r?`build \`${i}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>fe(e,u,a,r)})},K=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),F.open({content:`${e} is on latest version (${t})`,source:g.Settings.Toasts.Settings})};async function fe(e,t,i,a){window.enmity.plugins.installPlugin(e,({data:r})=>{r=="installed_plugin"||r=="overridden_plugin"?I.show({title:`Updated ${i.name}`,body:`Successfully updated to ${a?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{we()}}):I.show({title:"Error",body:`Something went wrong while updating ${i.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{he.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${i.name}%20Update%20Error%3A%20${a?`b${t}`:`v${t}`}`)}})})}async function be(e){let t=p.DCDDeviceManager.device,i=await J();t.includes("iPhone")&&(t=t.replace("iPhone",""),t=t.replace(",","."),(parseFloat(t)<10.6&&parseFloat(t)!=10.3||parseFloat(t)==14.6||parseFloat(t)==12.8)&&_.getItem(`__${e.name}_incompatible_dialog__`).then(a=>{a!=null||I.show({title:"Incompatible iPhone",body:`Please note that you're on an${i[p.DCDDeviceManager.device]}.
Some features in ${e.name} may behave in an unexpected manner.`,confirmText:"Don't show again",cancelText:"Close",onConfirm:()=>_.setItem(`__${e.name}_incompatible_dialog__`,"true")})}))}const L=window.enmity.modules.common.Components.General.Animated,[B,ve]=q(x.byProps("transitionToGuild"),x.byProps("setString"));var pe=({manifest:e})=>{const t=H.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:y.ThemeColorMap.HEADER_PRIMARY,fontFamily:y.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:y.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),i=n.useRef(new L.Value(1)).current,a=()=>{L.spring(i,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},r=()=>{L.spring(i,{toValue:1,duration:250,useNativeDriver:!0}).start()},u=()=>{B.openURL("https://spin.rip/")},v={transform:[{scale:i}]};return n.createElement(n.Fragment,null,n.createElement(D,{style:t.container},n.createElement(S,{onPress:u,onPressIn:a,onPressOut:r},n.createElement(L.View,{style:[v]},n.createElement(ce,{style:[t.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(D,{style:t.text_container},n.createElement(S,{onPress:()=>{B.openURL(e.sourceUrl)}},n.createElement(b,{style:[t.main_text,t.header]},e.name," ")),n.createElement(D,{style:{flexDirection:"row"}},n.createElement(b,{style:[t.main_text,t.sub_header]},"A plugin by"),n.createElement(S,{onPress:()=>{B.openURL("https://spin.rip/")}},n.createElement(b,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(D,{style:{flexDirection:"row"}},n.createElement(b,{style:[t.main_text,t.sub_header]},"Settings page by"),n.createElement(S,{onPress:()=>{B.openURL("https://github.com/acquitelol/")}},n.createElement(b,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},"Acquite <3"))),n.createElement(D,null,n.createElement(S,{style:{flexDirection:"row"},onPress:()=>{ve.setString(`**${e.name}** v${e.version}`),k("plugin name and version")}},n.createElement(b,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(b,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[_e,Q]=q(x.byProps("transitionToGuild"),x.byProps("setString"));var Se=({manifest:e,settings:t,hasToasts:i,section:a,commands:r})=>{const u=H.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:y.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:y.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[v,w]=n.useState(),[h,d]=n.useState();return n.createElement(n.Fragment,null,n.createElement(me,{onTouchStart:m=>{w(m.nativeEvent.pageX),d(m.nativeEvent.pageY)},onTouchEnd:m=>{v-m.nativeEvent.pageX<-100&&h-m.nativeEvent.pageY<40&&h-m.nativeEvent.pageY>-40&&re.pop()}},n.createElement(pe,{manifest:e}),a,r&&n.createElement(V,{title:"Plugin Commands"},r.map(m=>n.createElement(c,{label:`/${m.name}`,subLabel:m.description,leading:n.createElement(c.Icon,{style:u.icon,source:g.Settings.Commands}),trailing:c.Arrow,onPress:function(){Q.setString(`/${m.name}`),k(`the command ${m.name}`)}}))),n.createElement(V,{title:"Utility"},i&&n.createElement(n.Fragment,null,n.createElement(c,{label:"Initialization Toasts",leading:n.createElement(c.Icon,{style:u.icon,source:g.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(ue,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),F.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:g.Settings.Toasts.Settings})}})}),n.createElement(T,null)),n.createElement(c,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(c.Icon,{style:u.icon,source:g.Settings.Debug}),trailing:c.Arrow,onPress:async function(){Q.setString(await ge(e.name,e.version,e.build)),k("plugin debug information")}}),n.createElement(T,null),n.createElement(c,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(c.Icon,{style:u.icon,source:g.Delete}),trailing:c.Arrow,onPress:async function(){await _.removeItem("device_list"),F.open({content:"Cleared device list storage.",source:g.Settings.Toasts.Settings})}})),n.createElement(V,{title:"Source"},n.createElement(c,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(c.Icon,{style:u.icon,source:g.Copy}),trailing:c.Arrow,onPress:()=>{ye({manifest:e})}}),n.createElement(T,null),n.createElement(c,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(c.Icon,{style:u.icon,source:g.Open}),trailing:c.Arrow,onPress:()=>{_e.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(c,{style:u.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})))};const De={...N,onStart(){async function e(){await be(N)}this.commands=W,e()},onStop(){this.commands=[]},patches:[],getSettingsPanel({settings:e}){return n.createElement(Se,{manifest:N,settings:e,hasToasts:!1,section:null,commands:W})}};O(De);
