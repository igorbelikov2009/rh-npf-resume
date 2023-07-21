/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Checkbox from "../../ui/Checkbox/Checkbox";
import InputSubmit from "../../ui/inputs/InputSubmit/InputSubmit";
import InputTitle from "../../ui/inputs/InputTitle/InputTitle";
import styles from "./LoginForm.module.scss";

type Inputs = {
  phone: string;
};

interface LoginFormProps {
  closeLoginForm: () => void;
  isVisible: boolean;
}

const LoginForm: FC<LoginFormProps> = ({ isVisible, closeLoginForm }) => {
  const [isDormancyPhone, setDormancyPhone] = useState(true);
  const [isAgree, setAgree] = useState(false);
  const titleCheckbox = "Я прочитал(-а)";
  const spanCheckbox = " условия соглашения ";
  const subtitleCheckbox = "и, нажимая кнопку «Продолжить», принимаю их";

  const {
    register, // позволяет регистрировать различные поля для форм
    formState: { errors, isValid }, // объект с ошибками и т.д...
    handleSubmit, // некая обертка над нашим кастомным обработчиком отправки формы, она позволяет делать магии, связанные с валидацией.
    reset, // для очистки полей после отправки формы
    watch, // следит за изменением значения
  } = useForm<Inputs>({ mode: "all" }); // all / onBlur / onChange / onSubmit / onTouched

  // наш кастомный обработчик отправки формы
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    //  data - это набор данных из нашей формы
    // console.log(data);
    reset();
    setDormancyPhone(true);
    setAgree(false);
    closeLoginForm();
  };

  // console.log(watch("firstName")); // следит за изменением значения

  const toogleChecked = () => {
    setAgree(!isAgree);
  };

  return (
    // Здесь через onSubmit мы передаём данные полей в обёртку handleSubmit()
    <form
      className={isVisible ? styles["login-form__opacity1"] : styles["login-form__opacity0"]}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* включить проверку с обязательными или другими стандартными правилами проверки HTML */}
      <h1 className={styles["login-form__heading"]}>Вход/Регистрация</h1>

      <div className={styles["login-form__block-of-forms"]}>
        <div className={styles["login-form__input-container"]}>
          <label className={styles["my-input__label"]}>
            <InputTitle title="Телефон" isDormancy={isDormancyPhone} />

            <input
              className={errors?.phone ? styles["my-input__field_invalid"] : styles["my-input__field"]}
              type="tel"
              {...register("phone", {
                required: "Это поле обязательно к заполнению",
                onChange: (event) => {
                  setDormancyPhone(false);
                },
                onBlur: () => {
                  if (watch("phone").length === 0) {
                    setDormancyPhone(true);
                  }
                },
                minLength: {
                  value: 11,
                  message: "Минимум 11 символов",
                },
                maxLength: {
                  value: 16,
                  message: "Максимум 16 символов",
                },
              })}
            />
            {errors?.phone && <span className={styles["my-input__error"]}>{errors?.phone?.message || "Error!"} </span>}
          </label>
        </div>

        <div className={styles["login-form__checkbox-container"]}>
          <Checkbox
            checkedValue={isAgree}
            toogleChecked={toogleChecked}
            title={titleCheckbox}
            span={spanCheckbox}
            subtitle={subtitleCheckbox}
          />
        </div>

        <div className={styles["login-form__button-container"]}>
          <InputSubmit children="Продолжить" disabled={!isValid || !isAgree} />
        </div>
      </div>

      <p className={styles["login-form__title"]}>
        Вход для клиентов
        <span className={styles["login-form__span"]}> НПФ "Ренессанс - пенсии"</span>
      </p>

      <p className={styles["login-form__subtitle"]}>
        Нажимая кнопку «Продолжить», вы выражаете согласие на обработку своих персональных данных и принимаете условия
        соглашения
      </p>
    </form>
  );
};

export default LoginForm;
