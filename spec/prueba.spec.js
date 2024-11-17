describe("demo", function () {
  // se usa it() o test()
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});

        // Activity
        describe("Funcionamiento de la clase Activity", () => {
          it("Ver si las propiedades de Activity se inicializaban", () => {
            const activityMock = {
              id: "1",
              title: "Actividad 1",                     // Aqui testeamos que el constructor
              description: "Soy una actividad",         // inicialice todo adecuadamente
              imgUrl: "www.url-img.com",
            };
        
            const newActivity = new Activity(activityMock);
        
            // como pruebo, que pruebo en base a lo que tengo arriba en el it
            expect(newActivity).toBeInstanceof(Activity); // Expression expected.
            expect(newActivity.description).toBe(activityMock.description);
            expect(newActivity.title).toBe(activityMock.title);
            expect(newActivity.imgUrl).toBe(activityMock.imgUrl);
            expect(newActivity.id).toBe(activityMock.id);
          });
        });

