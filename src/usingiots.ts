import * as t from "io-ts";
import { ThrowReporter } from "io-ts/lib/ThrowReporter";

const nameValidator = t.string;
const validationResult = nameValidator.decode("foobar");
console.log(validationResult.isRight());

const countryValidator = t.type({
  id: t.string,
  name: t.string,
  capitalCity: t.string
});

interface Country extends t.TypeOf<typeof countryValidator> {}
const validCountry: Country = {
  id: "BE",
  name: "Belgium",
  capitalCity: "Brussels"
};

const invalidCountry: unknown = {
  foo: "foo",
  name: "bar"
};

const validationResultForValidCountry = countryValidator.decode(validCountry);
const validationResultForInvalidCountry = countryValidator.decode(
  invalidCountry
);

ThrowReporter.report(validationResultForValidCountry);
const validCountryObject = validationResultForValidCountry.value as Country;
console.log(`Valid country's name: ${validCountryObject.name}`);

try {
  ThrowReporter.report(validationResultForInvalidCountry);
  console.log("Done!");
} catch (error) {
  console.error("An error occured: ", error);
}
