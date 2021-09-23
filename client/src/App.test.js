import {render, screen} from "@testing-library/react";
import App from "./App";
import React from "react";
import configureStore from "redux-mock-store";
import {configure, mount} from "enzyme";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import CountryCards from "../src/modules/Home/index";

configure({adapter: new Adapter()});

describe("App", () => {
    let store;
    const middlewares = [];
    const mockStore = configureStore(middlewares);

    beforeEach(() => {
        store = mockStore([]);
    });

    describe("El componente App debería de renderizar.", () => {
        it('Debería renderizarse en la ruta "/home"', () => {
            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter initialEntries={["/home"]}>
                        <App />
                    </MemoryRouter>
                </Provider>
            );
            expect(wrapper.find(CountryCards)).toHaveLength(0);
        });
    });
});
