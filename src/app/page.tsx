import Image from "next/image";
import styles from "./page.module.css";

async function save(data: FormData) {
  console.log(data);
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>This project was only created for the API</h1>
      {/**
      <form action={save}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Github
          </label>
          <input
            type="email"
            name="github"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
          ></textarea>
        </div>
      </form>
  **/}
    </main>
  );
}
