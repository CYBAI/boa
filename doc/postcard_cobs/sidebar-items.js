initSidebarItems({"enum":[["DecodeResult","[`DecodeResult`] represents the possible non-error outcomes of pushing an encoded data byte into the [`DecoderState`] state machine"],["DecoderState","The [`DecoderState`] is used to track the current state of a streaming decoder. This struct does not contain the output buffer (or a reference to one), and can be used when streaming the decoded output to a custom data type."],["PushResult","[`PushResult`] is used to represent the changes to an (encoded) output data buffer when an unencoded byte is pushed into [`EncoderState`]."]],"fn":[["decode","Decodes the `source` buffer into the `dest` buffer."],["decode_in_place","Decodes a message in-place."],["decode_in_place_with_sentinel","Decodes a message in-place using an arbitrary sentinel value."],["decode_with_sentinel","Decodes the `source` buffer into the `dest` buffer using an arbitrary sentinel value."],["encode","Encodes the `source` buffer into the `dest` buffer."],["encode_with_sentinel","Encodes the `source` buffer into the `dest` buffer using an arbitrary sentinel value."],["max_encoding_length","Calculates the maximum possible size of an encoded message given the length of the source message. This may be useful for calculating how large the `dest` buffer needs to be in the encoding functions."]],"struct":[["CobsDecoder","The [`CobsDecoder`] type is used to decode a stream of bytes to a given mutable output slice. This is often useful when heap data structures are not available, or when not all message bytes are received at a single point in time."],["CobsEncoder","The [`CobsEncoder`] type is used to encode a stream of bytes to a given mutable output slice. This is often useful when heap data structures are not available, or when not all message bytes are received at a single point in time."],["EncoderState","The [`EncoderState`] is used to track the current state of a streaming encoder. This struct does not contain the output buffer (or a reference to one), and can be used when streaming the encoded output to a custom data type"]]});