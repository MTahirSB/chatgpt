import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '', // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default async function respond(messages) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: ''},
    { role: 'user', content: messages}],
    model: 'gpt-3.5-turbo',
  }).then(res=> res.choices[0].message.content)


  return chatCompletion
}
