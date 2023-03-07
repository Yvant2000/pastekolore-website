/**
 * @param {string} pathname
 */
function get_page_num(pathname) {
    const path_split = pathname.split("/").filter(String => String);  // remove empty string
    for (let i = 1;;i++)
        if  (!path_split.at(-i).includes("index.html"))
            return parseInt(path_split.at(-i));
}

/**
 * @param {string} pathname
 * @param {number} index
 */
function rebuild_url(pathname, index) {
    let path_split = pathname.split("/");
    for (let i = 1; ; i++) {
        if (path_split.at(-i) && !path_split.at(-i).includes("index.html")) {
            path_split[path_split.length - i] = index.toString();
            break;
        }
    }
    return path_split.join("/")
}

function prev_page() {
    const pathname = window.location.href;
    let index = get_page_num(pathname) - 1;
    return rebuild_url(pathname, index);
}

function next_page() {
    const pathname = window.location.href;
    let index = get_page_num(pathname) + 1;
    return rebuild_url(pathname, index);
}



/**
 * @param {string} title
 * @param {string} paragraph
 * @param {string} next
 */
function loadPage(title, paragraph, next) {
    document.getElementById("title").innerHTML = title;
    document.getElementById("paragraph").innerHTML = paragraph;
    document.getElementById("next").innerHTML = next;
}