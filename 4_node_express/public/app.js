document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("name", form.querySelector("#name").value);
      urlencoded.append("lastName", form.querySelector("#lastName").value);
      urlencoded.append("age", form.querySelector("#age").value);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };
      const res = await fetch("/add", requestOptions);
      const json = res.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  });
});
