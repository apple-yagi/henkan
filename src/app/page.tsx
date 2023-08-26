import { css } from "@kuma-ui/core";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={styles.h1}>Hello World</h1>
    </main>
  );
}

const styles = {
  h1: css`
    font-size: 24px;
  `,
};
