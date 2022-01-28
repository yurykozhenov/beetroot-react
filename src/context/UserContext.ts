import React from "react";
import { User } from "../types";

export const UserContext = React.createContext<{ users: User[] }>({
  users: [],
});
