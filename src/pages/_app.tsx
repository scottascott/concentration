import { type AppType } from "next/dist/shared/lib/utils";
import { ConfigProvider } from "antd";
import "~/styles/globals.css";
import "~/styles/menu3d.css";
import "~/styles/toolBar3d.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#a855f7" } }}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
};

export default MyApp;
