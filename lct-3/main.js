function checkBlank(c1, msg) {

    data = c1.value;

    // alert(data);
    l = data.length;

    if (l == 0) {
        alert(msg);
        return false;
    }
    return true;
}

function checkPassLen(c1, msg) {

    x = c1.value;
    l = x.length;

    if (l < 8) {
        alert(msg);
        c1.focus();
        return false;
    }
    return true;
}

function checkPassConfPass(c1, c2, msg) {
    x = c1.value;
    y = c2.value;
    if (x != y) {
        alert(msg);
        c1.value = "";
        c2.value = "";
        c1.focus();
        return false;
    }
    return true;
}