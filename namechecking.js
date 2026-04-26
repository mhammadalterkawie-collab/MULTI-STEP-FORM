export function Namecheck(chars) {
    if (!chars.length) {
        return 1;
    }
    else {
        for (let i = 0; i < chars.length; i++) {
            let t = chars[i].toLowerCase()
            if (t >= "a" && t <= "z" || t === " ") {
                continue;
            }
            else {
                return 2;
            }
        }
        return 0;
    }

}