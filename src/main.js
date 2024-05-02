import { getStandardVarer, getUkesMeny } from "./fire";
const app = document.querySelector("#app");

const standardVarer = await getStandardVarer();
const ukesMeny = await getUkesMeny();

standardVarer.forEach((doc) => {
    console.log(doc.data());
});

ukesMeny.forEach((doc) => {
    console.log(doc.data());
});
