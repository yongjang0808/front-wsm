const imageRootPath = process.env.PUBLIC_URL + "/assets/images/MainPage/area/";

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
const png = ".png";
const jpg = ".jpg";
const jfif = ".jfif";


export const cities = [
    { value: seoul,     label: "서울", img: imageRootPath + seoul + jfif},
    { value: gyeongGi,  label: "경기", img: imageRootPath + gyeongGi + png},
    { value: chungBuk,  label: "충북", img: imageRootPath + chungBuk + png},
    { value: chungNam,  label: "충남", img: imageRootPath + chungNam + jfif},
    { value: gangWon,   label: "강원", img: imageRootPath + gangWon + jpg},
    { value: jeonNam,   label: "전남", img: imageRootPath + jeonNam + jpg},
    { value: jeonBuk,   label: "전북", img: imageRootPath + jeonBuk + png},
    { value: gyeongBuk, label: "경북", img: imageRootPath + gyeongBuk + jfif},
    { value: gyeongNam, label: "경남", img: imageRootPath + gyeongNam + jfif},
    { value: jeju,      label: "제주", img: imageRootPath + jeju + png},
]