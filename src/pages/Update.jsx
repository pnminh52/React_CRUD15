import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = ({ products, onUpdate }) => {
  const { id } = useParams();
  const crtPrd = products.find((item) => item.id == id);
  const [inputValue, setInputValue] = useState({});
  const onUpdateFinal = (e) => {
    e.preventDefault();
    const updateData = { ...crtPrd, ...inputValue };
    onUpdate(updateData);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  console.log(products);
  return (
    <div>
      <form action="" onSubmit={onUpdateFinal}>
        <input
          defaultValue={crtPrd?.name}
          type="text"
          name="name"
          placeholder="name"
          onInput={onChange}
        />
        <input
          defaultValue={crtPrd?.des}
          type="text"
          name="des"
          placeholder="des"
          onInput={onChange}
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          onInput={onChange}
          defaultValue={crtPrd?.price}
        />
        <input
          defaultValue={crtPrd?.img}
          type="text"
          name="img"
          placeholder="img"
          onInput={onChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Update;
