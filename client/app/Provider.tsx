"use client";

import { Provider } from "react-redux";
import store from "./store/auth-slice/store";


export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <div>
        {children}
      </div>
    </Provider>
  );
}