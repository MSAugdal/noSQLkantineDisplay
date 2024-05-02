import { getStandardVarer, getUkesMeny } from "./fire";
const app = document.querySelector("#app");
const normal = document.querySelector("#normalmeny");
const ukes = document.querySelector("#varmmeny");

const standardVarer = await getStandardVarer();
const ukesMeny = await getUkesMeny();

standardVarer.forEach((doc) => {
    normal.innerHTML += `
        <div class="shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded grid grid-rows-2 grid-cols-[1fr_0.5fr] px-4 py-4 w-72">
            <div>${doc.data().rett}</div>
            <div>Pris: ${doc.data().pris}kr</div>
            <div>Allergen: ${doc.data().allergen}</div>
        </div>
    `;
});

ukesMeny.forEach((doc) => {
    ukes.innerHTML += `
        <div class="shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded grid grid-rows-2 grid-cols-[1fr_0.5fr] px-4 py-4 w-72">
            <div>${doc.data().rett}</div>
            <div>Pris: ${doc.data().pris}kr</div>
            <div>Allergen: ${doc.data().allergen}</div>
        </div>
    `;
});
