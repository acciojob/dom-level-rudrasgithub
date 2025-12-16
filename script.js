//your JS code here. If required.
//your JS code here. If required.
let ele = document.getElementById("level");
let depth = 0;
while (ele && ele.parentNode && ele.parenNode !== document) {
	ele = ele.parentNode;
	depth++;
}
alert(depth)