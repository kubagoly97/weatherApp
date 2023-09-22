import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
export function Form({ data, setData }) {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit(async (data) => {
          const url = `http://api.weatherapi.com/v1/current.json?key=${
            import.meta.env.VITE_API_KEY
          }&q=${data.city}&aqi=no`;
          try {
            const jsonResponse = await axios.get(url);
            setData(jsonResponse.data);
          } catch (e) {
            console.log(e);
          }
        })}
        action=""
      >
        <input
          {...register("city", { required: true })}
          type="text"
          placeholder="...type City"
          name="city"
          style={{
            padding: "9px",
            marginRight: "none",
            border: "none",
            borderTopLeftRadius: "3px",
            borderBottomLeftRadius: "3px",
          }}
        />
        <Button text="Submit" />
      </form>
    </>
  );
}
