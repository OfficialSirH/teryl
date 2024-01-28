import type { DiscordEmoji } from '#lib/utilities/emoji';
import { FT, T } from '@skyra/http-framework-i18n';

// emoji
export const RootName = T('commands/emoji:name');
export const RootDescription = T('commands/emoji:description');

// emoji create
export const Edit = T('commands/createEmoji:name');
export const EditDescription = T('commands/createEmoji:description');

// emoji edit
export const Edit = T('commands/editEmoji:name');
export const EditDescription = T('commands/editEmoji:description');

export const OptionsVariant = 'commands/emoji:optionsVariant';
export const OptionsVariantApple = T('commands/emoji:optionsVariantApple');
export const OptionsVariantFacebook = T('commands/emoji:optionsVariantFacebook');
export const OptionsVariantGoogle = T('commands/emoji:optionsVariantGoogle');
export const OptionsVariantMicrosoft = T('commands/emoji:optionsVariantMicrosoft');
export const OptionsVariantSamsung = T('commands/emoji:optionsVariantSamsung');
export const OptionsVariantTwitter = T('commands/emoji:optionsVariantTwitter');
export const OptionsVariantWhatsApp = T('commands/emoji:optionsVariantWhatsApp');
export const EmojiContent = FT<{ id: string; name: string; emoji: string }>('commands/emoji:emojiContent');
export const InvalidEmoji = T('commands/emoji:invalidEmoji');
export const UnsupportedEmoji = T('commands/emoji:unsupportedEmoji');
export const DiscordEmojiContent = FT<{ emoji: DiscordEmoji }>('commands/emoji:discordEmojiContent');
export const InvalidDiscordEmoji = T('commands/emoji:invalidDiscordEmoji');
