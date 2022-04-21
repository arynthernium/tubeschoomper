import { schoomp } from "tubeschoomper";

const template = {
	cheese: "@{{cheesetype}}",
	bread: "@{{breads.thebreadest.themostbread}}"
};

const data = {
	cheesetype: "havarti",
	breads: {
		thebreadest: {
			themostbread: 6346
		}
	}
};

console.log("schoomped: ");
console.log(schoomp(obj2, obj1));