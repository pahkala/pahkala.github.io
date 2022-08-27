from flask import Flask, request, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('application.html')


@app.route('/', methods=['POST'])
def request_data():
    input_text = request.form["input_text"]
    text = input_text.replace("\n", "").lower()
    text_for_char = list(text)
    char_count = len(text_for_char)
    text = text.rstrip(" ")
    sentence_split = text.split('.')
    sentence_count = len(remove_empty_items(sentence_split))
    text_to_list = text.split(' ')
    word_count = len(remove_empty_items(text_to_list))
    return render_template('application.html',
                           sentences=sentence_count,
                           words=word_count, characters=char_count)


def remove_empty_items(L):
    for i in L:
        if len(i) < 1:
            L.remove(i)
    return L


if __name__ == '__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(debug=True, use_reloader=True)
