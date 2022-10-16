function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
}

function insertChat(who, text, time = 0) {
    let control = "";
    const date = formatAMPM(new Date());

    if (who === "me") {
        control = "<li style=\"width:100%\">"
                        + "<div class=\"msj macro\">"
                            + "<div class=\"text text-l\">"
                                + "<p>" + text + "</p>"
                                + "<p><small>" + date + "</small></p>"
                            + "</div>"
                        + "</div>"
                    + "</li>";
    } else {
        control = "<li style=\"width:100%;\">"
                        + "<div class=\"msj-rta macro\">"
                            + "<div class=\"text text-r\">"
                                + "<p>" + text + "</p>"
                                + "<p><small>" + date + "</small></p>"
                            + "</div>"
                        + "<div class=\"avatar\" style=\"padding:0px 0px 0px 10px"
                        + "!important\"></div>"
                  + "</li>";
    }

    setTimeout(
        () => {
            // eslint-disable-next-line no-undef
            $("ul").append(control);
        }, time);
}

function sendNote() {
    const msg = document.getElementById("cur_note").value;
    insertChat("user1", msg, 0);
    document.getElementById("cur_note").value = "";
}

// -- Clear Chat
// resetChat();
//
/// /-- Print Messages
// insertChat("me", "Hello Tom...", 0);
// insertChat("you", "Hi, Pablo", 1500);
// insertChat("me", "What would you like to talk about today?", 3500);
// insertChat("you", "Tell me a joke",7000);
// insertChat("me", "Spaceman: Computer! Computer! Do we bring battery?!", 9500);
// insertChat("you", "LOL", 12000);

// -- NOTE: No use time on insertChat.
