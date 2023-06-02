import { LinkedinOutlined } from "@ant-design/icons";
export default function Footer() {
  return (
    <div className="w-full py-[50px] text-center">
      @2023 Scott Wang{" "}
      <a
        href="https://www.linkedin.com/in/scott-wang-a1b129210/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinOutlined />
      </a>
    </div>
  );
}
