import { Hono } from "hono";
import { welcome_module } from "../modules/welcome/welcome_module.ts";
import { not_found_handler } from "./not_found_handler.ts";
import { err_handler } from "./err_handler.ts";
import { start_register_module } from "../modules/auth/start_register/start_register_module.ts";
import { end_register_module } from "../modules/auth/end_register/end_register_module.ts";
import { CORS } from "./config.ts";
import { login_module } from "../modules/auth/login/login_module.ts";
import { refresh_token_module } from "../modules/auth/refresh_token/refresh_token_module.ts";
import { add_contact_module } from "../modules/contacts/add_contact/add_contact_module.ts";
import { get_contacts_module } from "../modules/contacts/get_contacts/get_contacts_module.ts";
import { edit_contact_module } from "../modules/contacts/edit_contact/edit_contact_module.ts";
import { remove_contact_module } from "../modules/contacts/remove_contact/remove_contact_module.ts";

export const app = new Hono();

app.use("/*", CORS);

app.route("/", welcome_module);

app.route("/start_register", start_register_module);
app.route("/end_register", end_register_module);
app.route("/login", login_module);
app.route("/refresh_token", refresh_token_module);

app.route("/add_contact", add_contact_module);
app.route("/get_contacts", get_contacts_module);
app.route("/edit_contact", edit_contact_module);
app.route("/remove_contact", remove_contact_module);

app.notFound(not_found_handler);
app.onError(err_handler);
