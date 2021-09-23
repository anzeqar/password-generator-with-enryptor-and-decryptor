const passwordRequest = document.querySelector(".password-request");
const encryptorRequest = document.querySelector(".encryptor-request");
const decryptorRequest = document.querySelector(".decryptor-request");

passwordRequest.addEventListener("click", (e) => {
  e.preventDefault();
  let length = document.querySelector("#length");
  let option = document.querySelector("#option");

  const generatedPassword = document.querySelector("#generated-password");
  if (length.value == "") {
    let error = "Please Enter Values";
    generatedPassword.innerHTML = `
    <p
                  id="generated-password"
                  class="
                    bg-dark
                    text-center
                    text-danger
                    mt-4
                    bg-primary
                    rounded-3
                    flex-wrap
                    p-2
                    align-self-center
                  "
                ><span>${error}</span>
            
    `;
    setTimeout(() => {
      generatedPassword.innerHTML = "";
    }, 2000);
    return;
  } else {
    length = Number(length.value);
    option = String(option.value);
    const _alphabets = "qwertyuiopasdfghjklzxcvbnm";
    const _numbers = "123456789";
    const _characters = "`~!@#$%^&*()_+{}|:\"<>?-=[]\\;'/.,";
    let passwordGenerated = "";
    var string = "";
    console.log(length);

    switch (option) {
      case "easy":
        string = _alphabets;
        for (let i = 0; i < length; i++) {
          passwordGenerated += string.charAt(
            Math.floor(Math.random() * string.length)
          );
        }
        break;

      case "medium":
        string = _alphabets + _numbers;
        for (let i = 0; i < length; i++) {
          passwordGenerated += string.charAt(
            Math.floor(Math.random() * string.length)
          );
        }
        break;
      case "hard":
        string = _alphabets + _numbers + _characters;
        for (let i = 0; i < length; i++) {
          passwordGenerated += string.charAt(
            Math.floor(Math.random() * string.length)
          );
        }
        break;
      default:
        return console.log("error");
    }
    console.log(passwordGenerated);
    generatedPassword.innerHTML = `
    <p id="generated-password"
                  class="
                  d-flex
                    bg-dark
                    text-center
                    mt-4
                    bg-primary
                    rounded-3
                    flex-wrap
                    p-2
                    align-self-center
                  "
                  
                ><span class="overflow-auto encryptor-scrollbar" id="clipboard-password">${passwordGenerated}</span>
                  
                </p>
                <p class="text-center copy-text" id="copy-password">
                  Click Above to Copy to Clipboard
                </p>
    `;
    var clipboardPassword;
    var copyPassword;
    generatedPassword.addEventListener("click", () => {
      clipboardPassword = document.querySelector("#clipboard-password");
      copyPassword = document.querySelector("#copy-password");
      navigator.clipboard.writeText(clipboardPassword.innerText);
      copyPassword.innerHTML = "Password Copied to Clipboard";
    });
  }
});

encryptorRequest.addEventListener("click", (e) => {
  e.preventDefault();
  let password = document.querySelector("#password");
  let secret = document.querySelector("#secret");

  console.log(password.value, secret.value);

  const generatedEncryption = document.querySelector("#generated-encryption");
  if (password.value == "" || secret.value == "") {
    let error = "Please Enter Values";

    generatedEncryption.innerHTML = `
    <p
                  id="generated-encryption"
                  class="
                    bg-dark
                    text-center
                    text-danger
                    mt-4
                    bg-primary
                    rounded-3
                    flex-wrap
                    p-2
                    align-self-center
                  "
                ><span>${error}</span>
                </p>
                
    `;
    setTimeout(() => {
      generatedEncryption.innerHTML = "";
    }, 2000);
    return;
  } else {
    let encrypted = CryptoJS.AES.encrypt(
      String(password.value),
      String(secret.value)
    );
    generatedEncryption.innerHTML = `
    <p
                  id="generated-encryption"
                  class="
                  d-flex
                    bg-dark
                    text-center
                    text-light
                    mt-4
                    bg-primary
                    rounded-3
                    flex-wrap
                    p-2
                    align-self-center
                  "
                ><span class="overflow-auto encryptor-scrollbar" id="clipboard-encrypted">${encrypted}</span>
                <p class="text-center copy-text" id="copy-encrypted">
                  Click Above to Copy to Clipboard
                </p>
            
    `;
    var clipboardEncrypted;
    var copyEncrypted;
    generatedEncryption.addEventListener("click", () => {
      clipboardEncrypted = document.querySelector("#clipboard-encrypted");
      copyEncrypted = document.querySelector("#copy-encrypted");
      navigator.clipboard.writeText(clipboardEncrypted.innerText);
      copyEncrypted.innerHTML = "Encrypted Text Copied to Clipboard";
    });
  }
});

decryptorRequest.addEventListener("click", (e) => {
  e.preventDefault();
  let decryptPassword = document.querySelector("#decrypt-password");
  let decryptSecret = document.querySelector("#decrypt-secret");

  console.log(decryptPassword.value, decryptSecret.value);

  const generatedDecryption = document.querySelector("#generated-decryption");

  if (decryptPassword.value == "" || decryptSecret.value == "") {
    let error = "Please Enter Values";

    generatedDecryption.innerHTML = `
      <p
                    id="generated-encryption"
                    class="
                      bg-dark
                      text-center
                      text-danger
                      mt-4
                      bg-primary
                      rounded-3
                      flex-wrap
                      p-2
                      align-self-center
                    "
                  ><span>${error}</span>
                  </p>
                  
      `;
    setTimeout(() => {
      generatedEncryption.innerHTML = "";
    }, 2000);
    return;
  } else {
    let decrypted = CryptoJS.AES.decrypt(
      String(decryptPassword.value),
      String(decryptSecret.value)
    );
    decrypted = decrypted.toString(CryptoJS.enc.Utf8);
    console.log(decrypted);
    if (decrypted == "") {
      decrypted = "Error: Not an Encrypted Text";
      generatedDecryption.innerHTML = `
      <p
                    id="generated-decryption"
                    class="
                    d-flex
                      bg-dark
                      text-center
                      text-danger
                      mt-4
                      bg-dark
                      rounded-3
                      flex-wrap
                      p-2
                      align-self-center
                    "
                  ><span class="overflow-auto encryptor-scrollbar" id="clipboard-decrypted">${decrypted}</span>
                  
              
      `;
    } else {
      generatedDecryption.innerHTML = `
        <p
                      id="generated-encryption"
                      class="
                      d-flex
                        bg-dark
                        text-center
                        text-light
                        mt-4
                        bg-primary
                        rounded-3
                        flex-wrap
                        p-2
                        align-self-center
                      "
                    ><span class="overflow-auto encryptor-scrollbar" id="clipboard-decrypted">${decrypted}</span>
                    <p class="text-center copy-text" id="copy-decrypted">
                      Click Above to Copy to Clipboard
                    </p>
                
        `;
      var clipboardDecrypted;
      var copyDecrypted;
      generatedDecryption.addEventListener("click", () => {
        clipboardDecrypted = document.querySelector("#clipboard-decrypted");
        copyDecrypted = document.querySelector("#copy-decrypted");
        navigator.clipboard.writeText(clipboardDecrypted.innerText);
        copyDecrypted.innerHTML = "Decrypted Text Copied to Clipboard";
      });
    }
  }
});
