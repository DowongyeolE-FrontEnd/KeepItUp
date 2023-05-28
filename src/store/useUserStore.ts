import { atom } from "jotai";

const userAtom = atom({
  accessToken: "",
  email: "",
});

export default userAtom;
