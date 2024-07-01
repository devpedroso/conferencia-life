const Tema = () => {
  const paragraph = (number, text) => {
    return (
      <div className="text-sm">
        <b className="title text-[var(--complement)]">{number}</b>
        {text}
        <br />
      </div>
    );
  };

  return (
    <div className="container-tema text-white p-4">
      <div className="title text-[var(--complement)] pb-2">Tema</div>
      <b className="title text-sm text-[var(--complement)]">Atos 2: 42-47</b>
      <div className="flex flex-col gap-2">
        {paragraph(
          "42 ",
          `E perseveravam na
        doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas
        orações.`
        )}
        {paragraph(
          "43 ",
          `E em toda a alma
          havia temor, e muitas maravilhas e sinais se faziam pelos apóstolos.`
        )}
        {paragraph(
          "44 ",
          `E todos os que
          criam estavam juntos, e tinham tudo em comum.`
        )}
        {paragraph(
          "45 ",
          `E vendiam suas
          propriedades e bens, e repartiam com todos, segundo cada um havia de
          mister.`
        )}
        {paragraph(
          "46 ",
          `E, perseverando
          unânimes todos os dias no templo, e partindo o pão em casa, comiam
          juntos com alegria e singeleza de coração,`
        )}
        {paragraph(
          "47 ",
          `Louvando a Deus, e
          caindo na graça de todo o povo. E todos os dias acrescentava o Senhor à
          igreja aqueles que se haviam de salvar.`
        )}
      </div>
    </div>
  );
};

export default Tema;
