import axios from "axios";

export const fetchAllPins = () => axios.get("/api/pins");

export const fetchPin = pinId => axios.get("/api/pins/" + pinId);

export const fetchQueryPins = query => axios.post("/api/pins/search", query);

export const createPin = pin => axios.post("/api/pins", pin);
