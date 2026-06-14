const flags = [
    "ac.png",
    "al.png",
    "ap.png",
    "am.png",
    "ba.png",
    "ce.png",
    "df.png",
    "es.png",
    "go.png",
    "ma.png",
    "mt.png",
    "ms.png",
    "mg.png",
    "pa.png",
    "pb.png",
    "pr.png",
    "pe.png",
    "pi.png",
    "rj.png",
    "rn.png",
    "rs.png",
    "ro.png",
    "rr.png",
    "sc.png",
    "sp.png",
    "se.png",
    "to.png"
];
export function flagsDOM() {
    const section = document.querySelector("#container-all-states-brazil");
    flags.forEach((flag) => {
        const newElementFlag = document.createElement("img");
        newElementFlag.src = `assets/flags_uf/${flag}`;
        newElementFlag.classList.add("flag-uf");
        newElementFlag.id = `${flag.split(".")[0]}`;
        section.appendChild(newElementFlag);
    });
}
;
