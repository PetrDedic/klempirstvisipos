import {
  Button,
  Card,
  Checkbox,
  Stack,
  Textarea,
  TextInput,
  Title,
  Notification,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const smallWindow = useMediaQuery("(max-width: 1200px)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      // Handle checkbox
      setFormData((prev) => ({
        ...prev,
        [target.name]: target.checked,
      }));
    } else {
      // Handle text input and textarea
      setFormData((prev) => ({
        ...prev,
        [target.name]: target.value,
      }));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResponseMessage(null);
    setError(null);

    try {
      const res = await axios.post("/api/sendMail", formData);
      setResponseMessage(res.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      }); // Reset the form
    } catch (err: any) {
      setError(err.response?.data?.message || "Nastala chyba!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack w="100%" align="center">
      <Title
        order={2}
        fz={32}
        ta="center"
        lh={1}
        id="form"
        style={{ scrollMarginTop: 100 }}
      >
        Kontaktujte nás!
      </Title>
      <Card
        w={smallWindow ? "100%" : 600}
        maw="100%"
        style={{
          backgroundColor: "rgba(0,0,0,.25)",
          backdropFilter: "blur(10px)",
          borderRadius: 16,
        }}
      >
        <Stack>
          <TextInput
            label="Jméno a příjmení"
            name="name"
            value={formData.name}
            onChange={handleChange}
            withAsterisk
            styles={{
              input: {
                borderRadius: 16,
              },
            }}
          />
          <TextInput
            label="E-mailová adresa"
            name="email"
            value={formData.email}
            onChange={handleChange}
            withAsterisk
            styles={{
              input: {
                borderRadius: 16,
              },
            }}
          />
          <TextInput
            label="Telefonní číslo"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            withAsterisk
            styles={{
              input: {
                borderRadius: 16,
              },
            }}
          />
          <Textarea
            label="Napište nám zprávu"
            name="message"
            value={formData.message}
            onChange={handleChange}
            withAsterisk
            autosize
            minRows={3}
            styles={{
              input: {
                borderRadius: 16,
              },
            }}
          />
          <Checkbox
            label="Souhlasím se zpracováním ososbních údajů"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            ml={8}
          />
          <Button
            bg="white"
            c="black"
            px={24}
            radius={16}
            onClick={handleSubmit}
            loading={loading}
          >
            Odeslat formulář
          </Button>
          {responseMessage && (
            <Notification
              color="green"
              title="Success"
              onClose={() => setResponseMessage(null)}
            >
              {responseMessage}
            </Notification>
          )}
          {error && (
            <Notification
              color="red"
              title="Error"
              onClose={() => setError(null)}
            >
              {error}
            </Notification>
          )}
        </Stack>
      </Card>
    </Stack>
  );
};

export default Form;
