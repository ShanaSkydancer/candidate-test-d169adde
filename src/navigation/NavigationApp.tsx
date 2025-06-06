import { Provider } from "react-redux";
import { store } from "../shared/store";
import { Navigation } from "./components/Navigation";

export const NavigationApp = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
