export function emailcheching(email) {
    let at = false;
    if (!email.length) {
        return 1; //empty....
    } else {
        for (let i = 0; i < email.length; i++) {
            if (email[i] !== " ") {
                if (email[i] !== "@") {
                    if (!at && i + 1 == email.length) {
                        return 3; // @ forgotten.
                    }
                    else {
                        continue;
                    }

                } else {
                    //email[i]="@";  i;
                    at = true;
                    for (let j = i ; j < email.length; j++) {
                        if (email[j] !== ".") {
                            if (email.length == j+1) {
                                return 4; // "." forgotten.
                            } else {
                                continue;
                            }
                        } else {
                            //email[j]="."
                            if (
                                email[i - 1] !== undefined &&
                                email[i + 1] !== undefined &&
                                email[i + 1] !== "."
                            ) {
                                if (email[j + 1] !== undefined) {
                                    return 0;
                                } else {
                                    return 6; //incorrect email ,should there be one charecter after "." at least .
                                }
                            } else {
                                return 5; //incorrect email ,There is no charecters after or before @.
                            }
                        }
                    }
                }
            } else {
                return 2; //should be wihtout space
            }
        }
    }
}