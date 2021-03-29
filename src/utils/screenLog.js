export const printANSI = () => {
  console.log("[Vue2-Vant-Base] created()");
  // ASCII - ANSI Shadow https://github.com/xero/figlet-fonts/blob/master/ANSI%20Shadow.flf
  let text = `
  ██╗   ██╗ ██╗   ██╗ ███████╗ ██████╗          ██████╗   █████╗  ███████╗ ███████╗
  ██║   ██║ ██║   ██║ ██╔════╝ ╚════██╗         ██╔══██╗ ██╔══██╗ ██╔════╝ ██╔════╝
  ██║   ██║ ██║   ██║ █████╗    █████╔╝ █████╗  ██████╔╝ ███████║ ███████╗ █████╗
  ╚██╗ ██╔╝ ██║   ██║ ██╔══╝   ██╔═══╝  ╚════╝  ██╔══██╗ ██╔══██║ ╚════██║ ██╔══╝
   ╚████╔╝  ╚██████╔╝ ███████╗ ███████╗         ██████╔╝ ██║  ██║ ███████║ ███████╗
    ╚═══╝    ╚═════╝  ╚══════╝ ╚══════╝         ╚═════╝  ╚═╝  ╚═╝ ╚══════╝ ╚══════╝
`;
  let text2 = `
  ██╗   ██╗ ██╗   ██╗ ███████╗ ██████╗         ██╗   ██╗  █████╗  ███╗   ██╗ ████████╗         ██████╗   █████╗  ███████╗ ███████╗
  ██║   ██║ ██║   ██║ ██╔════╝ ╚════██╗        ██║   ██║ ██╔══██╗ ████╗  ██║ ╚══██╔══╝         ██╔══██╗ ██╔══██╗ ██╔════╝ ██╔════╝
  ██║   ██║ ██║   ██║ █████╗    █████╔╝ █████╗ ██║   ██║ ███████║ ██╔██╗ ██║    ██║     █████╗ ██████╔╝ ███████║ ███████╗ █████╗
  ╚██╗ ██╔╝ ██║   ██║ ██╔══╝   ██╔═══╝  ╚════╝ ╚██╗ ██╔╝ ██╔══██║ ██║╚██╗██║    ██║     ╚════╝ ██╔══██╗ ██╔══██║ ╚════██║ ██╔══╝
  ╚████╔╝  ╚██████╔╝ ███████╗ ███████╗         ╚████╔╝  ██║  ██║ ██║ ╚████║    ██║            ██████╔╝ ██║  ██║ ███████║ ███████╗
    ╚═══╝    ╚═════╝  ╚══════╝ ╚══════╝          ╚═══╝   ╚═╝  ╚═╝ ╚═╝  ╚═══╝    ╚═╝            ╚═════╝  ╚═╝  ╚═╝ ╚══════╝ ╚══════╝
`;
  console.log(`%c${text}`, "color: #fc4d50");
  // console.log('%c感谢使用 anxhit!', 'color: #000; font-size: 14px;    font-family: Hiragino Sans GB,Microsoft YaHei,\\\\5FAE\\8F6F\\96C5\\9ED1,Droid Sans Fallback,Source Sans,Wenquanyi Micro Hei,WenQuanYi Micro Hei Mono,WenQuanYi Zen Hei,Apple LiGothic Medium,SimHei,ST Heiti,WenQuanYi Zen Hei Sharp,sans-serif;')
  // console.log('%cThanks for using antd pro!', 'color: #fff; font-size: 14px; font-weight: 300; text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;')
};
export const printInfo = (url, res) => {
  console.info(
    "%c" + url,
    "color: white; background-color:#67C23A;  padding: 2px 5px; border-radius: 2px;",
    res
  );
};
export const printErr = (url, err) => {
  console.info(
    "%c" + url,
    "color: white; background-color: #F56C6C; padding: 2px 5px; border-radius: 2px;",
    err
  );
};
