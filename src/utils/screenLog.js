export const printANSI = () => {
  console.log("[Vue2-Vant-Base] created()");
  // ASCII - ANSI Shadow https://github.com/xero/figlet-fonts/blob/master/ANSI%20Shadow.flf
  let text = `
██╗   ██╗██╗   ██╗███████╗██████╗         ██████╗  █████╗ ███████╗███████╗
██║   ██║██║   ██║██╔════╝╚════██╗        ██╔══██╗██╔══██╗██╔════╝██╔════╝
██║   ██║██║   ██║█████╗   █████╔╝ █████╗ ██████╔╝███████║███████╗█████╗
╚██╗ ██╔╝██║   ██║██╔══╝  ██╔═══╝  ╚════╝ ██╔══██╗██╔══██║╚════██║██╔══╝
 ╚████╔╝ ╚██████╔╝███████╗███████╗        ██████╔╝██║  ██║███████║███████╗
  ╚═══╝   ╚═════╝ ╚══════╝╚══════╝        ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
`;
  console.log(`%c${text}`, "color: #fc4d50");
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
