interface DefaultTheme {
    font: {
        size: {
            xxsmall: number;
            xsmall: number;
            small: number;
            base: number;
            medium: number;
            large: number;
            xlarge: number;
            xxlarge: number;
            xxxlarge: number;
        };
        family: {
            inter: string;
        };
        weight: {
            normal: number;
            medium: number;
            bold: number;
        };
    };
    color: {
        kWhiteColor: string,
        kBlackColor: string,
        kPrimaryDarkColor: string,
        kPrimaryLightColor: string,
        kAliceBlueColor: string,
        kBrandyPunchColor: string,
        kErrorColor: string
    };
    sizeConfig: {
        phone: string;
        tablet: string;
        desktop: string;
    };
}