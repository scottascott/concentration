import { type AppType } from "next/dist/shared/lib/utils";
import { ConfigProvider } from "antd";
import SoundContext from "~/context/soundContext";
import "~/styles/globals.css";
import "~/styles/menu3d.css";
import "~/styles/toolBar3d.css";
import { useState } from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [sound, setSound] = useState<boolean>(true);
  return (
    <SoundContext.Provider value={{ sound, setSound }}>
      <ConfigProvider theme={{ token: { colorPrimary: "#a855f7" } }}>
        <Component {...pageProps} />
      </ConfigProvider>
    </SoundContext.Provider>
  );
};

export default MyApp;
