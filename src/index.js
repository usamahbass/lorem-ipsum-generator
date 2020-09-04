import { LoremIpsum } from "lorem-ipsum";
import "bootstrap/scss/bootstrap.scss";
import "./index.scss";

const lorem = new LoremIpsum();

document.addEventListener("DOMContentLoaded", () => {
  const preview = document.querySelector("#loremPreview");
  const generate = document.querySelector("#buttonGenerate");
  const word = document.querySelector("#word");
  const sentences = document.querySelector("#sentences");
  const paragraph = document.querySelector("#paragraph");

  document
    .querySelector("#buttonRefresh")
    .addEventListener("click", () => window.location.reload());

  generate.addEventListener("click", () => {
    if ((word.value, sentences.value, paragraph.value === "")) {
      alert("isi form dulu bos !");
    } else {
      generate.disabled = true;
      document.querySelector("#buttonRefresh").classList.remove("d-none");
      preview.innerHTML += `
    <div class="card dark mb-5">
        <div class="card-body">
            <div class="row">
                <div class="col-md-10">
                  <p class="font-weight-bold">Result /word</p>
                </div>
                <div class="col-md-2">
                  <span onclick="" class="badge bg-danger"
                    >Copy Code</span
                  >
                </div>
            </div>
            <p><code class="text-muted">"${lorem.generateWords(
              word.value
            )}"</code></p>
            <textarea id="clipboard_word" style="opacity: 0"></textarea>
        </div>
    </div>
    `;

      preview.innerHTML += `
    <div class="card dark mb-5">
        <div class="card-body">
            <div class="row">
                <div class="col-md-10">
                  <p class="font-weight-bold">Result /sentences</p>
                </div>
                <div class="col-md-2">
                  <span onclick="" class="badge bg-danger"
                    >Copy Code</span
                  >
                </div>
            </div>
            <p><code class="text-muted">"${lorem.generateSentences(
              sentences.value
            )}"</code></p>
            <textarea id="clipboard_sentences" style="opacity: 0"></textarea>
        </div>
    </div>
    `;

      preview.innerHTML += `
    <div class="card dark mb-5">
        <div class="card-body">
            <div class="row">
                <div class="col-md-10">
                  <p class="font-weight-bold">Result /paragraph</p>
                </div>
                <div class="col-md-2">
                  <span onclick="" class="badge bg-danger"
                    >Copy Code</span
                  >
                </div>
            </div>
            <p><code class="text-muted">"${lorem.generateParagraphs(
              paragraph.value
            )}"</code></p>
            <textarea id="clipboard_paragraph" style="opacity: 0"></textarea>
        </div>
    </div>
    `;
    }
  });
});
