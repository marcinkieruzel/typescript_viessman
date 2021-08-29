document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    try {
      const res = await fetch("/add", {
          method: "POST",
          data: JSON.stringify({
              name: form.querySelector('#name').value,
              lastName: form.querySelector("#lastName").value,
              age: form.querySelector("#age").value
          })
      });
      const json = res.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  });
});
