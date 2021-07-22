import { getUserInfo } from "../screens/localStorage";

const Header = {
    render: () => {
        const {name} = getUserInfo();
        return `
        <div>
        <a href="/#/">SOTTP</a>
    </div>
    <div>
    ${name 
        ? `<a href="/#/profile">${name}</a>`
        : `<a href="/#/signin">sign-in</a>`
    }
        <a href="/#/cart">cart</a>
    </div>
        `;
    },
    after_render: () => {},
};
export default Header;