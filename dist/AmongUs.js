function O(e){window.enmity.plugins.registerPlugin(e)}const _={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function I(...e){return window.enmity.modules.bulk(...e)}function H(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function G(e){return window.enmity.patcher.create(e)}const w=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const R=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const $=window.enmity.modules.common.Storage,y=window.enmity.modules.common.Toasts,T=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const M=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const Y=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const N=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;var j="AmongUs",z="1.0.3",W="patch-1.0.2",X="sus",q=[{name:"amogus",id:"308440976723148800"}],J="#ff0069",K="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/AmongUs.js",g={name:j,version:z,build:W,description:X,authors:q,color:J,sourceUrl:K};function Q(e,t,i){return window.enmity.settings.getBoolean(e,t,i)}function Z(e){return window.enmity.settings.makeStore(e)}const U=e=>{let t=0;for(let i in e)t++;return t},ee=e=>{let t=e.split(`
`).map(i=>{if(i!="")return`"${i.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[U(t)]=`${t[U(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function te(){try{let e=await $.getItem("device_list");if(e)return JSON.parse(e);let t=(await M.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,i=ee(t);await $.setItem("device_list",i);let a=await $.getItem("device_list");return JSON.parse(a)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function ne(e,t){let i=await te();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Software Version:** ${R.DCDDeviceManager.systemVersion}
> **Device:** ${i[R.DCDDeviceManager.device]}`}function m(e){return window.enmity.assets.getIDByName(e)}const d={Debug:m("debug"),Retry:m("ic_message_retry"),Failed:m("Small"),Cancel:m("ic_megaphone_nsfw_16px"),Delete:m("ic_message_delete"),Copy:m("toast_copy_link"),Open:m("ic_leave_stage"),Clipboard:m("pending-alert"),Debug_Command:{Sent:m("ic_application_command_24px"),Clock:m("clock")},Settings:{Toasts:{Context:m("toast_image_saved"),Settings:m("ic_selection_checked_24px")},Invite:m("invite"),Debug:m("ic_rulebook_16px")}},F=e=>{y.open({content:`Copied ${e} to clipboard.`,source:d.Clipboard})},{native:S}=window.enmity;function oe(){S.reload()}S.version,S.build,S.device,S.version;async function ie({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,i=await(await M.get(t)).text;let a=i.match(/\d\.\d\.\d+/g),s=i.match(/patch\-\d\.\d\.\d+/g);return!a||!s?k(e.name,e.version):(a=a[0],s=s[0],a!=e.version?B(t,a,s.split("-")[1],e,!1):s!=e.build?B(t,a,s.split("-")[1],e,!0):k(e.name,e.version))}const B=(e,t,i,a,s)=>{const c=s?i:t;T.show({title:"Update found",body:`A newer ${s?"build":"version"} is available for ${a.name}. ${s?`
The version will remain at ${t}, but the build will update to ${i}.`:""}
Would you like to install ${s?`build \`${i}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>se(e,c,a,s)})},k=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),y.open({content:`${e} is on latest version (${t})`,source:d.Settings.Toasts.Settings})};async function se(e,t,i,a){window.enmity.plugins.installPlugin(e,({data:s})=>{s=="installed_plugin"||s=="overridden_plugin"?T.show({title:`Updated ${i.name}`,body:`Successfully updated to ${a?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{oe()}}):T.show({title:"Error",body:`Something went wrong while updating ${i.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{Router.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${i.name}%20Update%20Error%3A%20${a?`b${version}`:`v${version}`}`)},onCancel:()=>{T.close()}})})}const{components:o}=window.enmity;o.Alert;const ae=o.Button;o.FlatList;const re=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const le=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const f=o.Text;o.TextInput,o.TouchableHighlight;const v=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const b=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const L=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const l=o.FormRow,P=o.FormSection;o.FormSelect,o.FormSubLabel;const me=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const D=window.enmity.modules.common.Components.General.Animated,[C,ce]=I(_.byProps("transitionToGuild"),_.byProps("setString"));var de=({manifest:e})=>{const t=N.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:w.ThemeColorMap.HEADER_PRIMARY,fontFamily:w.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:w.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),i=n.useRef(new D.Value(1)).current,a=()=>{D.spring(i,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},s=()=>{D.spring(i,{toValue:1,duration:250,useNativeDriver:!0}).start()},c=()=>{C.openURL("https://spin.rip/")},h={transform:[{scale:i}]};return n.createElement(n.Fragment,null,n.createElement(b,{style:t.container},n.createElement(v,{onPress:c,onPressIn:a,onPressOut:s},n.createElement(D.View,{style:[h]},n.createElement(re,{style:[t.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(b,{style:t.text_container},n.createElement(v,{onPress:()=>{C.openURL(e.sourceUrl)}},n.createElement(f,{style:[t.main_text,t.header]},e.name," ")),n.createElement(b,{style:{flexDirection:"row"}},n.createElement(f,{style:[t.main_text,t.sub_header]},"A plugin by"),n.createElement(v,{onPress:()=>{C.openURL("https://spin.rip/")}},n.createElement(f,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(b,{style:{flexDirection:"row"}},n.createElement(f,{style:[t.main_text,t.sub_header]},"Settings page by"),n.createElement(v,{onPress:()=>{C.openURL("https://github.com/acquitelol/")}},n.createElement(f,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},"Acquite <3"))),n.createElement(b,null,n.createElement(v,{style:{flexDirection:"row"},onPress:()=>{ce.setString(`**${e.name}** v${e.version}`),F("plugin name and version")}},n.createElement(f,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(f,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[ue,V]=I(_.byProps("transitionToGuild"),_.byProps("setString"));var ge=({manifest:e,settings:t,hasToasts:i,section:a,commands:s})=>{const c=N.createThemedStyleSheet({icon:{color:w.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:w.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[h,x]=n.useState(),[u,p]=n.useState();return n.createElement(n.Fragment,null,n.createElement(le,{onTouchStart:r=>{x(r.nativeEvent.pageX),p(r.nativeEvent.pageY)},onTouchEnd:r=>{h-r.nativeEvent.pageX<-100&&u-r.nativeEvent.pageY<40&&u-r.nativeEvent.pageY>-40&&Y.pop()}},n.createElement(de,{manifest:e}),a,s&&n.createElement(P,{title:"Plugin Commands"},n.createElement(b,{style:c.text_container},s.map(r=>n.createElement(ae,{style:c.command,key:r,onPress:function(){V.setString(`/${r}`),F(`the command ${r}`)},title:`/${r}`},"/",r)))),n.createElement(P,{title:"Utility"},i&&n.createElement(n.Fragment,null,n.createElement(l,{label:"Initialization Toasts",leading:n.createElement(l.Icon,{style:c.icon,source:d.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(me,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),y.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:d.Settings.Toasts.Settings})}})}),n.createElement(L,null)),n.createElement(l,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(l.Icon,{style:c.icon,source:d.Settings.Debug}),trailing:l.Arrow,onPress:async function(){V.setString(await ne(e.name,e.version)),F("plugin debug information")}}),n.createElement(L,null),n.createElement(l,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(l.Icon,{style:c.icon,source:d.Delete}),trailing:l.Arrow,onPress:async function(){await $.removeItem("device_list"),y.open({content:"Cleared device list storage.",source:d.Settings.Toasts.Settings})}})),n.createElement(P,{title:"Source"},n.createElement(l,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(l.Icon,{style:c.icon,source:d.Copy}),trailing:l.Arrow,onPress:()=>{ie({manifest:e})}}),n.createElement(L,null),n.createElement(l,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(l.Icon,{style:c.icon,source:d.Open}),trailing:l.Arrow,onPress:()=>{ue.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(l,{label:`Plugin Version: ${e.version}`})))};const A=G("Amongus"),E=H("_currentDispatchActionType","_subscriptions","_waitQueue"),pe={...g,onStart(){const e=Z(this.name);E.dispatch({type:"LOAD_MESSAGES"}),e.set("test","test"),E.dispatch({type:"LOAD_MESSAGES_SUCCESS",channelId:0,messages:[],isBefore:!1,isAfter:!1,hasMoreBefore:!1,hasMoreAfter:!1,limit:25,jump:void 0,isStale:!1,truncate:void 0});let t=0,i=3;const a=()=>{let s=Q(g.name,`${g.name}-toastEnable`,!1);try{t++,console.log(`Amongus delayed start attempt ${t}/${i}.`),s&&y.open({content:`[${g.name}] start attempt ${t}/${i}.`,source:d.Debug});const c=E._actionHandlers._orderedActionHandlers.MESSAGE_CREATE.find(u=>u.name==="MessageStore"),h=E._actionHandlers._orderedActionHandlers.MESSAGE_UPDATE.find(u=>u.name==="MessageStore"),x=E._actionHandlers._orderedActionHandlers.LOAD_MESSAGES_SUCCESS.find(u=>u.name==="MessageStore");A.before(c,"actionHandler",(u,p)=>{p[0].message.content="sus"}),A.before(h,"actionHandler",(u,p)=>{p[0].message.content="sus"}),A.before(x,"actionHandler",(u,p)=>{p[0].messages=p[0].messages.map(r=>(r.content="sus",r))}),console.log(`${g.name} delayed start successful.`),s&&y.open({content:`${g.name} start successful.`,source:d.Settings.Toasts.Settings})}catch{t<i?(console.warn(`${g.name} failed to start. Trying again in ${t}0s.`),s&&y.open({content:`${g.name} failed to start trying again in ${t}0s.`,source:d.Failed}),setTimeout(a,t*1e4)):(console.error(`${g.name} failed to start. Giving up.`),y.open({content:`${g.name} failed to start. Giving up.`,source:d.Failed}))}};setTimeout(a,300)},onStop(){A.unpatchAll()},patches:[],getSettingsPanel({settings:e}){return n.createElement(ge,{manifest:g,settings:e,hasToasts:!0,section:null,commands:null})}};O(pe);
