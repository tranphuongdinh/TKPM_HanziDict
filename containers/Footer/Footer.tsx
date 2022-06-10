import React from "react";
import {
    AddressContainer,
    AddressDetail,
    AddressDetailWrapper,
    AddressWrapper,
    ButtonSocial,
    FooterEnd,
    FooterWrapper,
} from "./Footer.style";

const Footer: React.FC = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const addresses = [
        {
            city: "TP. Hồ Chí Minh",
            address: [
                {
                    title: "227 đường Nguyễn Văn Cừ, Phường 4, Quận 5",
                    detail: (
                        <p>Hotline: (84) 286 2884 499 - (84) 287 3089 899</p>
                    ),
                },
                {
                    title: "Phường Linh Trung, Thành phố Thủ Đức",
                    detail: (
                        <p>Hotline: (84) 286 2884 499 - (84) 287 3089 899</p>
                    ),
                },
            ],
        },
    ];

    return (
        <FooterWrapper>
            <AddressContainer>
                {addresses.map((address, index) => {
                    return (
                        <AddressWrapper key={`address-${index}`}>
                            <h3>{address.city}</h3>
                            <AddressDetailWrapper>
                                {address.address.map((addr, index) => {
                                    return (
                                        <AddressDetail key={`addr-${index}`}>
                                            <h4>{addr.title}</h4>
                                            {addr.detail}
                                        </AddressDetail>
                                    );
                                })}
                            </AddressDetailWrapper>
                        </AddressWrapper>
                    );
                })}
            </AddressContainer>
            <FooterEnd>
                <h5>2021 | Designed by Tran Phuong Dinh</h5>
                <div style={{ display: "flex" }}>
                    <a
                        href="https://hcmus.edu.vn/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ButtonSocial backgroundColor="blue">
                            <i className="fa-brands fa-facebook"></i>
                        </ButtonSocial>
                    </a>
                    <a
                        href="https://hcmus.edu.vn/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ButtonSocial backgroundColor="red">
                            <i className="fa-brands fa-youtube"></i>
                        </ButtonSocial>
                    </a>
                </div>
            </FooterEnd>
        </FooterWrapper>
    );
};

export default Footer;
