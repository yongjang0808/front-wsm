const imageRootPath = process.env.PUBLIC_URL + "/assets/images/MainPage/logo/";

const seoul = "Seoul"; 
const gyeongGi = "GyeongGi";
const chungBuk = "ChungBuk";
const chungNam = "ChungNam";
const gangWon = "GangWon";
const jeonNam = "JeonNam";
const jeonBuk = "JeonBuk";
const gyeongBuk = "GyeongBuk";
const gyeongNam = "GyeongNam";
const jeju = "Jeju";

export const cities = [
    { value: seoul,     label: "서울", img: imageRootPath + seoul},
    { value: gyeongGi,  label: "경기", img: imageRootPath + gyeongGi},
    { value: chungBuk,  label: "충북", img: imageRootPath + chungBuk},
    { value: chungNam,  label: "충남", img: imageRootPath + chungNam},
    { value: gangWon,   label: "강원", img: imageRootPath + gangWon},
    { value: jeonNam,   label: "전남", img: imageRootPath + jeonNam},
    { value: jeonBuk,   label: "전북", img: imageRootPath + jeonBuk},
    { value: gyeongBuk, label: "경북", img: imageRootPath + gyeongBuk},
    { value: gyeongNam, label: "경남", img: imageRootPath + gyeongNam},
    { value: jeju,      label: "제주", img: imageRootPath + jeju},
]