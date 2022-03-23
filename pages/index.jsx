import Head from "next/head";
import { Button, Card, CardContent, Grid } from "@material-ui/core";
import { Form, Formik } from "formik";
import FileUpload from "../components/FileUpload"

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Push Button | Home</title>
      </Head>

      <Card>
        <CardContent>
          <Formik initialValues={{}} onSubmit={() => {}}>
            {({ values, errors }) => (
              <Form>
                <Grid container spacing={2} direction="column">
                  <FileUpload />
                </Grid>
                <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </>
  );
}
