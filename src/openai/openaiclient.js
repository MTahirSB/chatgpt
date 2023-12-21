import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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', // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default async function respond(messages) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a very helpful assistant ,You try to help users in any way possible , remember not to suggest anything'},
    { role: 'user', content: messages}],
    model: 'gpt-3.5-turbo',
  }).then(res=> res.choices[0].message.content)


  return chatCompletion
}