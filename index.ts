/*
Copyright 2023, Marc Sances

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

interface HourFormat {
    hour: string;
    article: string;
    pronoun: string;
}

const numerals = ["zero", "un", "dos", "tres"];

const hours: HourFormat[] = [
    {
        hour: "dotze",
        article: "les",
        pronoun: "de "
    },
    {
        hour: "una",
        article: "la",
        pronoun: "d'"
    },
    {
        hour: "dues",
        article: "les",
        pronoun: "de "
    },
    {
        hour: "tres",
        article: "les",
        pronoun: "de "
    },
    {
        hour: "quatre",
        article: "les",
        pronoun: "de "
    },
    {
        hour: "cinc",
        article: "les",
        pronoun: "de "
    },
    {
        hour: "sis",
        article: "les",
        pronoun: "de "
    },
    {
        hour: "set",
        article: "les",
        pronoun: "de "
    },
    {
        hour: "vuit",
        article: "les",
        pronoun: "de "
    },
    {
        hour: "nou",
        article: "les",
        pronoun: "de "
    },
    {
        hour: "deu",
        article: "les",
        pronoun: "de "
    },
    {
        hour: "onze",
        article: "les",
        pronoun: "d' "
    }];

export const toCatalanTime = (time: Date): string  => {
    const isOClock = time.getMinutes() < 7 || (time.getMinutes() == 7 && time.getSeconds() < 30);
    let str;
    if (isOClock) {
         const hour = hours[(time.getHours() % 12)];
         str = hour.article + " " + hour.hour;
         if (time.getMinutes() === 0) {
            str = str + " en punt";
         } else {
             str = str + (time.getMinutes() >= 5 ? " ben" : "") + " tocades";
         }
    } else {
        const hour = hours[(time.getHours() + 1) % 12];
        const minutes = time.getMinutes();
        const quarterId = Math.floor(minutes/ 15);
        const quarter = numerals[quarterId];
        const quarterFraction = time.getMinutes() % 15;
        const halfQuarter = quarterFraction > 7 || (quarterFraction === 7 && time.getSeconds() >= 30);
        const tocat = halfQuarter ? (quarterFraction >= 10 && quarterFraction < 12) : (quarterFraction < 5 && quarterFraction !== 0);
        const benTocat = halfQuarter ? quarterFraction >= 11 : quarterFraction >= 5;
        str = (halfQuarter && quarterId === 0 ? "mig" : quarter) + (quarterId >= 2 ? " quarts" : " quart") +
            (halfQuarter && quarter !== "zero" ? " i mig" : "") + (benTocat ? " ben" : "") +
            (benTocat || tocat ? " tocat" : "") + ((tocat || benTocat) && quarterId >= 2 ? "s " : " ") +
            hour.pronoun + hour.hour;
    }
    return str;
}

export default toCatalanTime;
