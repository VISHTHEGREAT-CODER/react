function customRender(reactelement, maincontainer) {
    const domelement = document.createElement(reactelement.type);
    domelement.innerText = reactelement.children;
    domelement.setAttribute('href', reactelement.props.href);
    domelement.setAttribute('target', reactelement.props.target);

    maincontainer.appendChild(domelement);
}

const reactelement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const maincontainer = document.querySelector('#root');

customRender(reactelement, maincontainer);
