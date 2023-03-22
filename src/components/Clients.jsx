import styles from "../style";
import { clients } from "../constants";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`} >
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`} >
          <a href={client.link} target="_blank">
            <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain cursor-pointer" />
          </a>
        </div>
      ))}
    </div>
  </section>
)

export default Clients;
